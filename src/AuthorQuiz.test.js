import React from 'react';
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';

const state = {
	turnData: {
		books: ['IT', 'Romeo and Juliet', 'The Shining', 'Harry Potter and Socerers stone'],
		author: {
			name: "William Shakespeare",
			imageUrl: "images/authors/williamshakespeare.jpg",
			imageSource: "Wikimedia Commons",
			books: ["Romeo and Juliet", "Hamlet", "Macbeth"]
		}
	},
	highlight: "none"
}

describe( 'Author Quiz', () => {
	it( "renders without crashing", () => {
		const div = document.createElement( "div" );
		ReactDOM.render( <AuthorQuiz { ...state } onAnswerSelected={ () => { } } />, div );
	} );
} );


// test( 'renders learn react link', () => {
// 	const { getByText } = render( <AuthorQuiz /> );
// 	const linkElement = getByText( /Author Quiz/i );
// 	expect( linkElement ).toBeInTheDocument();
// } );
