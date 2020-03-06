import * as solc from 'solc';
import * as solts from 'solts'
import * as fs from 'fs';

const contracts = [
    __dirname + '/contracts/ERC721.sol',
]

function importSolidity(path: string) {
    if (path.match('@openzeppelin')) path = __dirname + '/../node_modules/' + path;
    return {
        contents: fs.readFileSync(path).toString()
    }
}

function main() {
    const input = solts.EncodeInput(solts.InputDescriptionFromFiles(...contracts));
    const output = solts.DecodeOutput(solc.compile(input, { import: importSolidity }));
    if (output.errors && output.errors.length > 0) 
        throw new Error(output.errors.map(err => err.formattedMessage).join('\n'));

    for (const filename in output.contracts) {
        const compiled: solts.Compiled[] = [];
        const solidity = output.contracts[filename];
        for (const contract in solidity) {
            const comp = output.contracts[filename][contract];
            compiled.push({ 
                name: contract, 
                abi: comp.abi, 
                bin: comp.evm.bytecode.object, 
                links: solts.TokenizeLinks(comp.evm.bytecode.linkReferences), 
            })
        }
        const target = filename.replace(/\.[^/.]+$/, '.ts');
        fs.writeFileSync(target, solts.Print(...solts.NewFile(compiled)));
    }
}

main();