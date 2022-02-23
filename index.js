console.log("Welcome \nPlease Enter Your Choice!!!")
let list=['car wash','clean room'];
let adddraft=[];
console.log("Enter 'quit' To Quit Application \nEnter 'add' To Add new Todo \nEnter 'delete' To Delete a Todo \nEnter 'abandon' To Move Task in draft \nEnter 'complete' To Mark Todo as Complete \nEnter 'see' To Display all Todos \nEnter 'view draft' To Display Draft Todos");
let message = window.prompt("Enter The Command You Would Like To Perform");
while(message!=="quit"){
    if(message === "add"){
        const add = window.prompt("Enter Todo You Want to Add");
        const date = Date();
        list.push(`${add} ${date}`);
        console.log("*/--------------------------*/")
        console.log("Great.....You added a Task to Todo list");
        console.log("*/--------------------------*/")
    }
    else if(message === "delete"){
        // const del =window.prompt("Enter Todo Number You Want to Delete");
        for(let i =0; i<=list.length-1;i++){
                     console.log(`${i}.${list[i]}`);
                 }
         console.log("Select a Number of Todo to Delete")
        const del =parseInt(window.prompt("Enter Todo Number You Want to Delete"));
         if(Number.isInteger(del)){ 
        let del1 = list.splice((del,1));
        console.log("*/--------------------------*/")
        console.log(`You Deleted  ${del1}`);
        console.log("*/--------------------------*/")
         }
         
         else{
            window.prompt("Invalid Number");
             
        // let del1 = list.splice((del),1);
        // console.log("*/--------------------------*/")
        // console.log(`You Deleted  ${del1}`);
        // console.log("*/--------------------------*/")
         }
    }
    else if(message.toLowerCase() === "abandon"){
        const draft=prompt("Enter the index of item you want to save as draft :")
        console.log(`${list[draft]} has been moved to drafts. Press view draft to see draft items.`)
        adddraft.push(list[draft]);
        list.splice(draft,1);    
    }
    else if(message.toLowerCase()==='view draft'){
        if(adddraft.length===0){
            console.log("The draft is empty !")
        }
        else{
            for(var i=0;i<adddraft.length;i++){
                console.log(`${i} : ${adddraft[i]}`)
            }
        }
    }

    else if(message==="see"){
        for(let i =0; i<=list.length-1;i++){
            console.log(`${i}.${list[i]}`);
            //  console.log(`${list[i].task}${list[i].status}`);
        }
    }
    else if(message==="complete"){
        for(let i =0; i<=list.length-1;i++){
            console.log(`${i}.${list[i]} `);
        }
        console.log("Select a Number of Todo to Mark as Complete");
        let mark = parseInt(window.prompt("Select a Number from Todo to mark as Complete"));
        if(Number.isInteger(mark)){ 
            let mark1 = list.splice(mark,1);
            console.log(mark1);
            list.push({status:"completed",task:mark1});
            console.log("*/--------------------------*/")
            console.log(`You Completed ${mark1} Task`);
            console.log("*/--------------------------*/")
             }
             
             else{
                window.prompt("Invalid Number");
             }
    }
   
    message =  window.prompt("Enter The Command You Would Like To Perform");

}
console.log("Thank You For Using Application ;)")