// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Enum.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

interface GnosisSafe {
    /// @dev Allows a Module to execute a Safe transaction without any further confirmations.
    /// @param to Destination address of module transaction.
    /// @param value Ether value of module transaction.
    /// @param data Data payload of module transaction.
    /// @param operation Operation type of module transaction.
    function execTransactionFromModule(address to, uint256 value, bytes calldata data, Enum.Operation operation)
        external
        returns (bool success);
}

contract AutoswapModule {

    string public constant NAME = "Autoswap Module";
    string public constant VERSION = "0.1.0";
    string internal constant SWAP_EXACT_INPUT = "exactInputSingle((address,address,uint24,address,uint256,uint256,uint256,uint160))";

    // Safe -> Token
    mapping(address => IERC20) public desiredTokens;
    // Safe -> Token -> boolean
    mapping(address => mapping(IERC20 => bool)) public sourceTokens;
    ISwapRouter public uniswapRouter;

    event SourceTokenSet(address indexed safe, IERC20 indexed sourceToken);
    event SourceTokenUnset(address indexed safe, IERC20 indexed sourceToken);
    event DesiredTokenSet(address indexed safe, IERC20 indexed desiredToken);
    event ExecuteAutoswap(address indexed safe, IERC20 fromToken, IERC20 destToken, uint256 fromAmount);

    constructor(address _uniswapRouter) {
        uniswapRouter = ISwapRouter(_uniswapRouter);
    }

    /// @dev Allows to update the desired token for a specified safe. This can only be done via a Safe transaction.
    /// @param token Token contract address.
    function setDesiredToken(IERC20 token)
        public
    {
        desiredTokens[msg.sender] = token;
        emit DesiredTokenSet(msg.sender, token);
    }

    /// @dev Allows a source token to be auto swappable for a specified safe. This can only be done via a Safe transaction.
    /// @param token Token contract address.
    function setSourceToken(IERC20 token)
        public
    {
        sourceTokens[msg.sender][token] = true;
        emit SourceTokenSet(msg.sender, token);
    }

    /// @dev Disallow a source token to be auto swappable for a specified safe. This can only be done via a Safe transaction.
    /// @param token Token contract address.
    function unsetSourceToken(IERC20 token)
        public
    {
        sourceTokens[msg.sender][token] = false;
        emit SourceTokenUnset(msg.sender, token);
    }

    /// @dev Allows to swap a token in a Safe to its desired token.
    /// @param safe The Safe whose funds should be used.
    /// @param token Token contract address to swap.
    /// @param amount Amount that should be swap.
    function executeAutoswap(
        GnosisSafe safe,
        IERC20 token,
        uint256 amount
    ) public {
        require(sourceTokens[address(safe)][token], "source token is not in the allowlist");

        // Get current desired token
        IERC20 destToken = desiredTokens[address(safe)];
        require(address(destToken) != address(0x0), "desired token has not been set");

        // Perform external interactions
        bytes memory approveData = abi.encodeWithSignature("approve(address,uint256)", address(uniswapRouter), amount);
        require(safe.execTransactionFromModule(address(token), 0, approveData, Enum.Operation.Call), "Could not approve");

        address[] memory path = new address[](2);
        path[0] = address(token);
        path[1] = address(destToken);
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
            .ExactInputSingleParams({
                tokenIn: address(token),
                tokenOut: address(destToken),
                fee: 100,
                recipient: address(safe),
                deadline: block.timestamp,
                amountIn: amount,
                amountOutMinimum: 1,
                sqrtPriceLimitX96: 0
            });
        bytes memory data = abi.encodeWithSignature(SWAP_EXACT_INPUT, params);
        require(safe.execTransactionFromModule(address(uniswapRouter), 0, data, Enum.Operation.Call), "Could not execute swap");

        emit ExecuteAutoswap(address(safe), token, destToken, amount);
    }

    function getDesiredToken(address safe) public view returns (IERC20 desiredToken) {
        return desiredTokens[safe];
    }
}
