import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{


    constructor(props){
        super(props)

        const dish = props.dishSend;
        if(dish != null){
            console.log(dish.name);
        }else{
            console.log("es nulo pa");
        }
        
    }
    renderComments(commentsIn){
        const commentsList = commentsIn.comments.map((comment) =>{
                    return(
                        <li>
                            <p>{comment.comment}<br/>
                            --{comment.author}, {comment.date}</p>
                        </li>
                    );
                }); 
         return commentsList;       
    }

    render(){
        if (this.props.dishSend != null){
                

                return(
                    <div className="row m-1">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg top src={this.props.dishSend.image} alt={this.props.dishSend.name} />
                                <CardBody>
                                <CardTitle>{this.props.dishSend.name}</CardTitle>
                                <CardText>{this.props.dishSend.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h2>Comments</h2>
                            <ul class = "list-unstyled">
                            {this.renderComments(this.props.dishSend)}
                            </ul>
                        </div>
                    </div>
                );
                }
            else
                return(
                    <div></div>
                );
        }
}
export default DishDetail;