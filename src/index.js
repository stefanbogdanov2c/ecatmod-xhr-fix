Object.defineProperty(exports, "__esModule", { value: true });
Object.assign(globalThis, { WebSocket: require('ws') });
const fs = require('fs');
const ecatmod = require('ecatmod');
global._jsonix_xmldom = require('xmldom');
global._jsonix_xmlhttprequest = require('xmlhttprequest');
const contents = fs.readFileSync('SampleEsi.xml', 'utf8');
const esi = ecatmod.unmarshalEsiString(contents);
ecatmod.applyToEsi(esi);