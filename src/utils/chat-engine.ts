// ici on créé un nouvel utilisateur dans la bd et on l'ajoute aussi 

import axios from "axios"
import { toast } from "sonner";

const projectID = "228ef409-7a42-4267-8e20-d4002c28a2eb"
const privateKey = "0d5e9e4f-fb45-4611-8fc5-a51c9c50332d"

export const createUser = async (user:Record<string, unknown>) => {

    const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.chatengine.io/users/',
        headers: { 
          'PRIVATE-KEY': privateKey
        },
        data : JSON.stringify(user)
      };

      axios(config)
      .then(function (response) {
        toast.info("Utilisateur enregistré avec succes")
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

}