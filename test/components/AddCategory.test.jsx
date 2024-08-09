import { fireEvent, screen } from "@testing-library/dom"
import { render } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 
        
        render( <AddCategory onNewCategory={ ()=> {} }/> );
        
        const input = screen.getByTestId('test-input');
        fireEvent.input( input, { target: { value: 'Goku' } } );
        screen.debug();
        expect( input.value ).toBe('Goku');
        //expect(screen.getAllByRole('input').value).toBe("")
     })
 })