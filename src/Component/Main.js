import React,{Component} from 'react';
import './Main.css';


class Main extends Component{
    
    
    state={blogDetails:[{pid:101,blogContent:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library ",postOwner:"David Jones",time:new Date(),postimg:"./images/profileimg.jfif",likes:0},
                  {pid:102,blogContent:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library",postOwner:"Leo Tolstoy",time:new Date(),postimg:"./images/profileimg.jfif",likes:0},
                  {pid:103,blogContent:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library",postOwner:"John Donne",time:new Date(),postimg:"./images/profileimg.jfif",likes:0},
                  {pid:104,blogContent:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library",postOwner:"Oscar Wilde",time:new Date(),postimg:"./images/profileimg.jfif",likes:0},
                  {pid:105,blogContent:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library",postOwner:"Seneca",time:new Date(),postimg:"./images/profileimg.jfif",likes:0},
                  {pid:106,blogContent:"React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library",postOwner:"Conan Doyle",time:new Date(),postimg:"images/profileimg.jfif",likes:0}
                 ]
              
                }


IncreaseLikes=(id)=>{
    if(id){
        const blogerArray = this.state.blogDetails;
        for(let i=0;i<blogerArray.length;i++){
            const blog = blogerArray[i];
            if(blog.pid===id){
                blog.likes=blog.likes+1;
            }
        }
    
    this.setState({
        blogDetails:blogerArray
    });
    }
    }
    
   
    
     render(){
           

         return(
             <div className="card-holder">
             {this.state.blogDetails.map(
              (detail,index)=>(
                  <div className="card w-75 ">
                      <div className="card-header">
                          <div>
                           <img src={detail.postimg}/>
                          </div>
                          <div>
                          <b>{detail.postOwner}</b><br/>
                          <span>{detail.time.toLocaleDateString()} {detail.time.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})}</span>
                          </div>
                      </div>
                    <div className="card-body">
                      <p class="card-text">{detail.blogContent}</p>
                      <button type="button" className="btn btn-primary" 
                        onClick={this.IncreaseLikes.bind(this,detail.pid)} 
                         >Like</button>
                      <p>{detail.likes}</p>
                    </div>
                  </div>
              )
             )}
             </div>
         )}
        
   

}

export default Main;