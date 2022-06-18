
// IMPORTS

import colors from 'colors';
import Method from './methods.mjs';;

// CODE

class Terminal {
    static sendDebug(message, ...args) {
        if(mp.config.debug) {
            return console.log(`${`[${Method.getRealTime()}]`.grey} ${colors.cyan('[DEBUG]')} ${`${message}`.reset} ${args.length >= 1 ? `[${`${` "${args}" `.split(',').join('", "')}`.cyan}${`]`.grey}`.white : `[]`.grey}`);
        }
    };

    static sendDebugDetailed(message, ...args) {
        if(mp.config.debugDetailed) {
            return console.log(`${`[${Method.getRealTime()}]`.grey} ${'[DEBUG]'.grey} ${`${message}`.reset} ${args.length >= 1 ? `[${`${` "${args}" `.split(',').join('", "')}`.grey}${`]`.grey}`.grey : `[]`.grey}`);
        }
    };

    static sendInfo(message, ...args) {
        return console.log(`${`[${Method.getRealTime()}]`.grey} ${colors.yellow('[INFO]')} ${`${message}`.reset} ${args.length >= 1 ? `[${`${` "${args}" `.split(',').join('", "')}`.yellow}${`]`.grey}`.grey : `[]`.grey}`);
    };

    static sendDone(message, ...args) {
        return console.log(`${`[${Method.getRealTime()}]`.grey} ${colors.green('[DONE]')} ${`${message}`.reset} ${args.length >= 1 ? `[${`${` "${args}" `.split(',').join('", "')}`.green}${`]`.grey}`.grey : `[]`.grey}`);
    };

    static sendError(message, ...args) {
        return console.log(`${`[${Method.getRealTime()}]`.grey} ${colors.red('[ERROR]')} ${`${message}`.reset} ${args.length >= 1 ? `[${`${` "${args}" `.split(',').join('", "')}`.red}${`]`.grey}`.grey : `[]`.grey}`);
    };
}

export default Terminal;