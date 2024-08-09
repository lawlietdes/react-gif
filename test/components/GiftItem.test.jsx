import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GiftItem>', () => { 
    const title = 'This is a title';
    const url = 'https://media0.giphy.com/media/gk3R16JhLP8RUka2nD'; 
        
    test('debe hacer match con el Snapshot', () => {
        const { container }= render( <GifItem  title= { title } url={ url }/>);
        expect( container ).toMatchSnapshot();

     })
     test('debe mostrar el url indicado y el ALT indicado', () => { 
        render( <GifItem  title= { title } url={ url }/>);
        //screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
      })
      test('debe mostrar el titulo en el componente', () => { 
        render( <GifItem  title= { title } url={ url }/>);
        //screen.debug();
        expect( screen.getByText(title) ).toBeTruthy();
      })
 })