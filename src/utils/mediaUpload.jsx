import { createClient } from "@supabase/supabase-js"

const url = "https://kfkwemmdbjfftxlntlcy.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtma3dlbW1kYmpmZnR4bG50bGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcxMDMwNTUsImV4cCI6MjA2MjY3OTA1NX0._BR5wCdFzGNcziOzr__v01HRymIENyl28BoDaqyaOvw"
        
const supabase = createClient(url,key)

export default function fileUpload(file){

    const mediaUploadPromise = new Promise(
        (resolve, reject) => {

            if(file == null){
                reject("No file selected")
                return
            }
            
            const timeStamp = new Date().getTime()
            const newName = timeStamp + "_" + file.name

            supabase.storage.from("images").upload(newName,file,{
                upsert : false,
                cacheControl : "3600"
            }).then(() => {
                const publicUrl = supabase.storage.from("images").getPublicUrl(newName)
                resolve(publicUrl)
            }).catch(() => {
                reject("Error uploading file")
            })
        }
 )        
    return mediaUploadPromise 
}