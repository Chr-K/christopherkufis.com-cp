export default function ArticleSubmit(){
    async function submit(){
        await fetch('https://api.christopherkufis.com/imageupload',{
            method:'GET',
            credentials:'include',
            mode:'cors'
        }).then((res)=>{
            res.json().then((res)=>{
                console.log(res)
            })
        })
    }
    return(
    <>
    <button onClick={submit} className="btn-1">Submit</button>
    </>
    )
}