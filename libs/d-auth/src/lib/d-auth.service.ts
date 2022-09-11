import { Injectable } from '@nestjs/common';
import { u8aToHex } from '@polkadot/util';
import { decodeAddress, signatureVerify } from '@polkadot/util-crypto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class DAuthService {
    private isValidSignature (signedMessage: string, signature: string, address: string) {
        const publicKey = decodeAddress(address);
        const hexPublicKey = u8aToHex(publicKey);
//polkadot(verify if signature is valid)
        return signatureVerify(signedMessage, signature, hexPublicKey).isValid;
    }

    public async signin(params) {
        const { message, signature, username } = params;
        const isValid = this.isValidSignature(message, signature, username);

        return isValid;
    }

    public async signinTask3(params) {
        const { message, signature, username, challengeCode } = params;
        const isValid = this.isValidSignature(message, signature, username);

        //check if challenge exists
        if (isValid === true) {
            const result = await prisma.challenge.findFirst({
                where: {
                    usedAt: null,
                    requester: username,
                    challenge: challengeCode
                }
            })

            if (result) {
                //update challengecode to expired
                await prisma.challenge.update({
                    where: {
                        id: result.id
                    },
                    data: {
                        usedAt: new Date()
                    }
                });
                return true;
            }
        }

        return false
    }
}
