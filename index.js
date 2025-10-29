import jwt from "jwt-simple";
import crypto from "crypto-browserify";
import { Transform } from "stream-browserify";
import { Buffer } from "buffer";

window.Buffer = Buffer;
window.crypto = crypto;
window.Transform = Transform;

window.JWT = {
    encode: jwt.encode,
    decode: jwt.decode,
};
