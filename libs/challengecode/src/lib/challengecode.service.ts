import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ChallengecodeService {
    public async getChallengeCode(address) {
        //check if a challenge code exists
        const verifyChallenge = await this.verifyChallengeCode(address);
        if(verifyChallenge === false) {
            //add a new challenge code
            return this.addChallenge(address);
        }
        //return the challenge code
        const result = await prisma.challenge.findFirst({
            where: {
                usedAt: null,
                requester: address
            }
        })
        return result;
    }

    private async verifyChallengeCode(address:string): Promise<boolean> {
        //check if challengecode is valid
        const result = await prisma.challenge.findFirst({
            where: {
                usedAt: null,
                requester: address
            }
        })

        if(result) {
            //check if challengecode is expired after 5 minutes
            const now = new Date();
            const createdAt = new Date(result.createdAt);
            let diff = (now.getTime() - createdAt.getTime()) / 1000;
            diff /= 60;
            const minutes = Math.abs(Math.round(diff));
            if(minutes > 3) {
                //update challengecode to expired
                await prisma.challenge.update({
                    where: {
                        id: result.id
                    },
                    data: {
                        usedAt: new Date()
                    }
                });
                return false;
            }
            return true;
        }
        return false;
    }

    private async addChallenge(address: string) {
        //make a random string
        const challenge = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const addChallenge = {
            challenge: challenge,
            requester: address
        }

        //store the challenge in the database
        const result = await prisma.challenge.create({
            data: addChallenge
        });

        return result;
    }
}
