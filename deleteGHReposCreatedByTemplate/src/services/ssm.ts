import { SSM } from 'aws-sdk';

const getParameterWorker = async (name:string, decrypt:boolean) : Promise<string> => {
    const ssm = new SSM({region: process.env.region});
    try{
        const result = await ssm
        .getParameter({ Name: name, WithDecryption: decrypt })
        .promise();
        return result.Parameter!.Value!;
    } catch(e){
        console.log(e);
        throw e;
    }
    
}

export const getParameter = async (name:string) : Promise<string> => {
    return getParameterWorker(name,false);
}

export const getEncryptedParameter = async (name:string) : Promise<string> => {
    return getParameterWorker(name,true);
}



