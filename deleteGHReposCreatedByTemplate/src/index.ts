import { getEncryptedParameter } from "./services/ssm";
import { Handler, ScheduledEvent } from 'aws-lambda';

export const lambdaHandler: Handler = async (event: ScheduledEvent): Promise<void> => {
    // gather env vars
    const tokenParamName = process.env.tokenSecretName;
    const baseUrl = process.env.baseUrl;
    const templatesToRemoveRepos: string[] = process.env.templatesToRemoveRepos!.split(',');

    const ssmEncryptedParameter = await getEncryptedParameter(tokenParamName!);

    // list org repos
    // can you get only template_root attribute form repos list using graphql?
    // compare template_root with templateToRemoveRepos
    // if template_root is in templateToRemoveRepos, delete repo
    // if template_root is not in templateToRemoveRepos, do nothing

    // if you want to delete a repo, you can use the following code // const response = await octokit.request('DELETE /repos/{owner}

try { // fetch is available with Node.js 18 console.log('EVENT: \n' + JSON.stringify(event, null, 2));
  console.log(baseUrl)
  console.log(ssmEncryptedParameter)
  console.log(templatesToRemoveRepos) 
  console.log('EVENT: \n' + JSON.stringify(event, null, 2));     
}
        catch (err) {
          console.log(err);
          
          }
}
