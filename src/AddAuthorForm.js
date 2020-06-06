import React from "react";
import "./AddAuthorForm.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class AuthorForm extends React.Component {

	state = {
		name: "",
		imageUrl: "",
		books: [],
		bookTemp: ""
	}

	handleSubmit = ( event ) => {
		event.preventDefault();
		this.props.onAddAuthor( this.state );
	}

	onFieldChange = ( event ) => {
		this.setState( {
			[event.target.name]: event.target.value
		} );
	}

	handleAddBook = ( event ) => {
		this.setState( {
			books: this.state.books.concat( [this.state.bookTemp] )
		} );
		this.setState( {
			bookTemp: ""
		} )
	}

	render() {
		return (
			<form onSubmit={ this.handleSubmit }>
				<div className="AddAuthorForm__input">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" value={ this.state.name } onChange={ this.onFieldChange }></input>
				</div>
				<div className="AddAuthorForm__input">
					<label htmlFor="imageUrl">ImageUrl</label>
					<input type="text" name="imageUrl" value={ this.state.imageUrl } onChange={ this.onFieldChange }></input>
				</div>
				<div className="AddAuthorForm__input">
					<label htmlFor="bookTemp">Books</label>
					{ this.state.books.map( book => <p key={ book }>{ book }</p> ) }
					<input type="text" name="bookTemp" value={ this.state.bookTemp } onChange={ this.onFieldChange }></input>
					<input type="button" value="+" onClick={ this.handleAddBook } />
				</div>
				<div className="AddAuthorForm__submit">
					<input type="submit" value="Add" />
				</div>
			</form>
		);
	}
}
function AddAuthorForm( { onAddAuthor } ) {
	return (
		<div className="AddAuthorForm">
			<h1>Add author</h1>
			<AuthorForm onAddAuthor={ onAddAuthor }></AuthorForm>
		</div>
	)
}

function mapDispatchToProps( dispatch, props ) {
	return {
		onAddAuthor: ( author ) => {
			dispatch( { type: 'ADD_AUTHOR', author } );
			props.history.push( "/" );
		}
	};
}

function mapStateToProps( state ) {
	return {};
}

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( AddAuthorForm ) );