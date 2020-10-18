import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Control, LocalForm , Errors} from 'react-redux-form';
import { Card, CardImg,  Button, Modal, ModalHeader, ModalBody, Label, Row, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

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
                <Breadcrumb>
                <BreadcrumbItem>
                  <Link to='/home'>Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link to='/menu'>Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                  {props.dish.name}
                </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                <h3>{props.dish.name}</h3><hr/>
              </div>
                <div className="col-12 col-md-5 m-1" >
                    <RenderDish dish={props.dish}/>
                </div>
                <div className="col-12 col-md-5 m-1" >
                <h2 > Comments </h2>
                <ul class = "list-unstyled" > 
                    <RenderComments comments={props.comments}/>
                </ul>
                    <CommentForm />
                </div>
            </div>
            
        );
    }else
    return (<div></div>);
    } 

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            isFormOpen: false,
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleForm(){
        this.setState({
          isFormOpen: !this.state.isFormOpen
        })
      }
    handleSubmit(values){
        console.log("current state is: "+JSON.stringify(values));
        alert("current state is: "+JSON.stringify(values));
    }
    render(){
        return(
            <div>
                <Button outline className="btn" onClick={this.toggleForm}><i className="fa fa-pencil"></i>  Submit Comment</Button>

                <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm}>
                    <ModalHeader toggle={this.toggleForm}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group pl-4 pr-4" >
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className="form-group pl-4 pr-4">
                                <Label htmlFor="author" >Your Name</Label>
                                <Control.text model=".author" name="author" 
                                            className="form-control"
                                            placeholder="Your Name"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }} /> 
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                     />
                            </Row>
                            <Row className="form-group pl-4 pr-4">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" name="comment" rows="10" className="form-control" placeholder="Comment"/>
                            </Row>
                            <Row className="form-group pl-4">
                                <Button type="submit" color="primary">Submit</Button>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
export default DishDetail;