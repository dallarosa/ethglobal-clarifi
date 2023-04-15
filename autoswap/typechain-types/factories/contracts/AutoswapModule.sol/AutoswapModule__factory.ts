/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AutoswapModule,
  AutoswapModuleInterface,
} from "../../../contracts/AutoswapModule.sol/AutoswapModule";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_uniswapV2Router02",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "desiredToken",
        type: "address",
      },
    ],
    name: "DesiredTokenSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "fromToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "destToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
    ],
    name: "ExecuteAutoswap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "sourceToken",
        type: "address",
      },
    ],
    name: "SourceTokenSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "safe",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "sourceToken",
        type: "address",
      },
    ],
    name: "SourceTokenUnset",
    type: "event",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "desiredTokens",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract GnosisSafe",
        name: "safe",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "executeAutoswap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "safe",
        type: "address",
      },
    ],
    name: "getDesiredToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "desiredToken",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "setDesiredToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "setSourceToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "sourceTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapV2Router02",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "unsetSourceToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200153a3803806200153a8339818101604052810190620000379190620000e9565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011b565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b18262000084565b9050919050565b620000c381620000a4565b8114620000cf57600080fd5b50565b600081519050620000e381620000b8565b92915050565b6000602082840312156200010257620001016200007f565b5b60006200011284828501620000d2565b91505092915050565b61140f806200012b6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063a7c6402c11610066578063a7c6402c14610145578063b4b5267914610163578063e01df1ef14610193578063e0a31237146101af578063ffa1ad74146101df5761009e565b806322ee13c4146100a357806382a1ce1b146100bf57806383b731c5146100db578063a3f4df7e1461010b578063a6a3245414610129575b600080fd5b6100bd60048036038101906100b89190610bc5565b6101fd565b005b6100d960048036038101906100d49190610c18565b6106bd565b005b6100f560048036038101906100f09190610c71565b6107ae565b6040516101029190610cfd565b60405180910390f35b6101136107e1565b6040516101209190610da8565b60405180910390f35b610143600480360381019061013e9190610c18565b61081a565b005b61014d6108f4565b60405161015a9190610deb565b60405180910390f35b61017d60048036038101906101789190610c71565b61091a565b60405161018a9190610cfd565b60405180910390f35b6101ad60048036038101906101a89190610c18565b610982565b005b6101c960048036038101906101c49190610e06565b610a74565b6040516101d69190610e61565b60405180910390f35b6101e7610aa3565b6040516101f49190610da8565b60405180910390f35b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff166102c6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102bd90610eee565b60405180910390fd5b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610398576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038f90610f5a565b60405180910390fd5b8273ffffffffffffffffffffffffffffffffffffffff1663095ea7b3600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518363ffffffff1660e01b81526004016103f5929190610f98565b6020604051808303816000875af1158015610414573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104389190610fed565b610477576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046e90611066565b60405180910390fd5b600082600060405180604001604052808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525087600060405160240161050095949392919061119a565b6040516020818303038152906040527f61a5e145000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505090508473ffffffffffffffffffffffffffffffffffffffff1663468721a7600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660008460006040518563ffffffff1660e01b81526004016105e294939291906112ea565b6020604051808303816000875af1158015610601573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106259190610fed565b610664576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065b90611382565b60405180910390fd5b8473ffffffffffffffffffffffffffffffffffffffff167f2d5e3a37a9a962c11440321c8cb142ac20dbc688e40004cacf5bf3c5e73fa3938584866040516106ae939291906113a2565b60405180910390a25050505050565b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fb2344971edae5612fcccb4f2b0639cb708244e7f0b69ab5c159e7ee25d1f1b6b60405160405180910390a350565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040518060400160405280600f81526020017f4175746f73776170204d6f64756c65000000000000000000000000000000000081525081565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fee962939df889c0a3806c2f157a7b9e546a5a02ce2b551f1607c94b210c4287360405160405180910390a350565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f09cbc5e8ab797524b32acfb6c80c4e45f29655934c44ccd73dd8d3f5af83ce7160405160405180910390a350565b60016020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6040518060400160405280600581526020017f302e312e3000000000000000000000000000000000000000000000000000000081525081565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b0c82610ae1565b9050919050565b6000610b1e82610b01565b9050919050565b610b2e81610b13565b8114610b3957600080fd5b50565b600081359050610b4b81610b25565b92915050565b6000610b5c82610b01565b9050919050565b610b6c81610b51565b8114610b7757600080fd5b50565b600081359050610b8981610b63565b92915050565b6000819050919050565b610ba281610b8f565b8114610bad57600080fd5b50565b600081359050610bbf81610b99565b92915050565b600080600060608486031215610bde57610bdd610adc565b5b6000610bec86828701610b3c565b9350506020610bfd86828701610b7a565b9250506040610c0e86828701610bb0565b9150509250925092565b600060208284031215610c2e57610c2d610adc565b5b6000610c3c84828501610b7a565b91505092915050565b610c4e81610b01565b8114610c5957600080fd5b50565b600081359050610c6b81610c45565b92915050565b600060208284031215610c8757610c86610adc565b5b6000610c9584828501610c5c565b91505092915050565b6000819050919050565b6000610cc3610cbe610cb984610ae1565b610c9e565b610ae1565b9050919050565b6000610cd582610ca8565b9050919050565b6000610ce782610cca565b9050919050565b610cf781610cdc565b82525050565b6000602082019050610d126000830184610cee565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610d52578082015181840152602081019050610d37565b60008484015250505050565b6000601f19601f8301169050919050565b6000610d7a82610d18565b610d848185610d23565b9350610d94818560208601610d34565b610d9d81610d5e565b840191505092915050565b60006020820190508181036000830152610dc28184610d6f565b905092915050565b6000610dd582610cca565b9050919050565b610de581610dca565b82525050565b6000602082019050610e006000830184610ddc565b92915050565b60008060408385031215610e1d57610e1c610adc565b5b6000610e2b85828601610c5c565b9250506020610e3c85828601610b7a565b9150509250929050565b60008115159050919050565b610e5b81610e46565b82525050565b6000602082019050610e766000830184610e52565b92915050565b7f736f7572636520746f6b656e206973206e6f7420696e2074686520616c6c6f7760008201527f6c69737400000000000000000000000000000000000000000000000000000000602082015250565b6000610ed8602483610d23565b9150610ee382610e7c565b604082019050919050565b60006020820190508181036000830152610f0781610ecb565b9050919050565b7f6465736972656420746f6b656e20686173206e6f74206265656e207365740000600082015250565b6000610f44601e83610d23565b9150610f4f82610f0e565b602082019050919050565b60006020820190508181036000830152610f7381610f37565b9050919050565b610f8381610b01565b82525050565b610f9281610b8f565b82525050565b6000604082019050610fad6000830185610f7a565b610fba6020830184610f89565b9392505050565b610fca81610e46565b8114610fd557600080fd5b50565b600081519050610fe781610fc1565b92915050565b60006020828403121561100357611002610adc565b5b600061101184828501610fd8565b91505092915050565b7f617070726f7665206661696c65642e0000000000000000000000000000000000600082015250565b6000611050600f83610d23565b915061105b8261101a565b602082019050919050565b6000602082019050818103600083015261107f81611043565b9050919050565b6000819050919050565b600060ff82169050919050565b60006110b86110b36110ae84611086565b610c9e565b611090565b9050919050565b6110c88161109d565b82525050565b600060029050919050565b600081905092915050565b6000819050919050565b6110f781610cdc565b82525050565b600061110983836110ee565b60208301905092915050565b6000602082019050919050565b61112b816110ce565b61113581846110d9565b9250611140826110e4565b8060005b8381101561117157815161115887826110fd565b965061116383611115565b925050600181019050611144565b505050505050565b600061118482610cca565b9050919050565b61119481611179565b82525050565b600060c0820190506111af6000830188610f89565b6111bc60208301876110bf565b6111c96040830186611122565b6111d6608083018561118b565b6111e360a08301846110bf565b9695505050505050565b60006112086112036111fe84611086565b610c9e565b610b8f565b9050919050565b611218816111ed565b82525050565b600081519050919050565b600082825260208201905092915050565b60006112458261121e565b61124f8185611229565b935061125f818560208601610d34565b61126881610d5e565b840191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600281106112b3576112b2611273565b5b50565b60008190506112c4826112a2565b919050565b60006112d4826112b6565b9050919050565b6112e4816112c9565b82525050565b60006080820190506112ff6000830187610f7a565b61130c602083018661120f565b818103604083015261131e818561123a565b905061132d60608301846112db565b95945050505050565b7f436f756c64206e6f742065786563757465207377617000000000000000000000600082015250565b600061136c601683610d23565b915061137782611336565b602082019050919050565b6000602082019050818103600083015261139b8161135f565b9050919050565b60006060820190506113b76000830186610cee565b6113c46020830185610cee565b6113d16040830184610f89565b94935050505056fea26469706673582212200fde65b8ddeea4c467f413964024a7bf311de65d866b3aac6ed1801460e18bc964736f6c63430008110033";

type AutoswapModuleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AutoswapModuleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AutoswapModule__factory extends ContractFactory {
  constructor(...args: AutoswapModuleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _uniswapV2Router02: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AutoswapModule> {
    return super.deploy(
      _uniswapV2Router02,
      overrides || {}
    ) as Promise<AutoswapModule>;
  }
  override getDeployTransaction(
    _uniswapV2Router02: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_uniswapV2Router02, overrides || {});
  }
  override attach(address: string): AutoswapModule {
    return super.attach(address) as AutoswapModule;
  }
  override connect(signer: Signer): AutoswapModule__factory {
    return super.connect(signer) as AutoswapModule__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AutoswapModuleInterface {
    return new utils.Interface(_abi) as AutoswapModuleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutoswapModule {
    return new Contract(address, _abi, signerOrProvider) as AutoswapModule;
  }
}
