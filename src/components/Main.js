import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import { actions } from 'react-redux-form'

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments : state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},//this is a thunk

  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
});

class Main extends Component {

constructor(props){
    super(props);

}

componentDidMount(){
  this.props.fetchDishes();
}



render(){
  const HomePage = () => {
    return(
      <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
    );
  }
  const DishWithId = ({match}) => {
    return(
      <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}
      />
    );
  }
  

  //se hace llamado de componentes de 3 formas diferentes
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders}/>} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Redirect to="/home" />
        </Switch>
        
      </div>
      <Footer/>
    </div>
  );
}
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
