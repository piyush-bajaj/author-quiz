import React from 'react';
import ReactDOM from "react-dom";
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure( { adapter: new Adapter() } );

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

	describe( "when no answer is selected", () => {
		let wrapper;
		beforeAll( () => {
			wrapper = mount( <AuthorQuiz { ...state } onAnswerSelected={ () => { } } /> );
		} );

		it( "should have white background color", () => {
			expect( wrapper.find( "div.row.turn .authorimage" ).props().src ).toBeDefined();
			expect( wrapper.find( "div.row.turn" ).props().style.backgroundColor ).toBe( 'white' );
		} );
	} );

	describe( "when correct answer is selected", () => {
		let wrapper;
		beforeAll( () => {
			wrapper = mount( <AuthorQuiz { ...( Object.assign( {}, state, { highlight: "correct" } ) ) } onAnswerSelected={ () => { } } /> );
		} );

		it( "should have green background color", () => {
			expect( wrapper.find( "div.row.turn .authorimage" ).props().src ).toBeDefined();
			expect( wrapper.find( "div.row.turn" ).props().style.backgroundColor ).toBe( 'green' );
		} );

	} );

	describe( "when incorrect answer is selected", () => {
		let wrapper;
		beforeAll( () => {
			wrapper = mount( <AuthorQuiz { ...( Object.assign( {}, state, { highlight: "wrong" } ) ) } onAnswerSelected={ () => { } } /> );
		} );

		it( "should have red background color", () => {
			expect( wrapper.find( "div.row.turn .authorimage" ).props().src ).toBeDefined();
			expect( wrapper.find( "div.row.turn" ).props().style.backgroundColor ).toBe( 'red' );
		} );

	} );

	describe( "when first answer is selected", () => {
		let wrapper;
		const handleAnswerSelected = jest.fn();
		beforeAll( () => {
			wrapper = mount( <AuthorQuiz { ...( Object.assign( {}, state, { highlight: "wrong" } ) ) } onAnswerSelected={ handleAnswerSelected } /> );
			wrapper.find( ".answer" ).first().simulate( "click" );
		} );

		it( "onAnswerSelected should be called", () => {
			expect( handleAnswerSelected ).toBeCalled();
			expect( handleAnswerSelected ).toHaveBeenCalled();

			// expect( wrapper.find( "div.row.turn" ).props().style.backgroundColor ).toBe( 'red' );
		} );

		it( "should receive IT", () => {
			// expect( handleAnswerSelected ).toBeCalled();
			// expect( handleAnswerSelected ).toHaveBeenCalled();
			expect( handleAnswerSelected ).toHaveBeenCalledWith( "IT" );


			// expect( wrapper.find( "div.row.turn" ).props().style.backgroundColor ).toBe( 'red' );
		} );
	} );
} );


// test( 'renders learn react link', () => {
// 	const { getByText } = render( <AuthorQuiz /> );
// 	const linkElement = getByText( /Author Quiz/i );
// 	expect( linkElement ).toBeInTheDocument();
// } );
