import React from 'react';
import { Card, CardImg,  CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderComments({comments}) {
        const commentsList = comments.map((comment) => {
            return (
                <li>
                <p> { comment.comment } < br/>
                --{ comment.author } ,
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </p> 
                </li>
            );
        });
        return commentsList;
    }

    function RenderDish({dish}){
            return ( 
                
                <Card >
                <CardImg top src = { dish.image } alt = { dish.name }/> <CardBody >
                <CardTitle > { dish.name } </CardTitle> <CardText > { dish.description } </CardText> </CardBody> 
                </Card>
 
            );
    }

    const DishDetail = (props) => {
        if(props.dish != null){
            return(
            <div className="row m-1" >
                <div className="col-12 col-md-5 m-1" >
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1" >
                <h2 > Comments </h2>
                <ul class = "list-unstyled" > 
                    <RenderComments comments={props.dish.comments}/>
                </ul>
              
                </div>
            </div>
            
        );
    }else
    return (<div></div>);
    } 
export default DishDetail;