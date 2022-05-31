import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

//Beginning typescript: In order to convert a js or jsx file to typescript, we must first change the file ext to ts ro tsx respectively

//Here we are designating a varible to type string, We cannot assign it anything else
//const name: string = 'somestring'

//This is a demo of how to type a function - the boolean after the arrow is what we expect the function to return - we can also designate this void which
//is like undefined in js
//const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => {return true}

//This is how we type objects - either a type or and interface
//Interface: all interfaces need to have the capital I in the name such as...
//You can extend an interface like a class
//interface ISearchBoxProps {
//   className: string;
//   placeholder?: string; // the question mark means its optional
// }

//We can make unions with types:

// type CanadianAddress = {
//   street: string;
//   province: string;
// }

// type AmericanAddress = {
//   street: string;
//   state: string;
// }

// //This is a union
// type NorthAmericanAddress = CanadianAddress | AmericanAddress;

// // Now we can use either province or state
// const Address: NorthAmericanAddress = {
//   street: 'hdhdsf',
//   province: 'afdas'
// }

// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder: string;
// }

// interface IChangeHandlerProps {
//   onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => {
  return (
    <input
      className={`search-box' ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e)} //WE want to know what event we are getting from react
    />
  );
};

export default SearchBox;


