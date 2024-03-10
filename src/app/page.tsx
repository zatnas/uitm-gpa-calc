import React from "react";
import {v4 as uuid} from "uuid";

export default function Home() {
  return (
    <div>
      <Form>
        <InputGroup/>
        <InputGroup/>
        <InputGroup/>
        <InputGroup/>
      </Form>
    </div>
  );
}

function Form({children}: {children: React.ReactNode}) {
  return (
    <form>
      {children}
    </form>
  )
}

function RadioGroup({children}: {children: React.ReactNode}) {
  return (
    <div className="flex">
      {children}
    </div>
  )
}

function RadioGroupItem({name, value}: {name: string, value: string}) {
  const input_id = uuid();
  return (
    <div className="flex items-center">
      <input id={input_id} type="radio" className="hidden peer" name={name} value={value} />
      <label htmlFor={input_id} className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-700 peer-checked:bg-green-500 rounded p-4 m-1 h-1 w-1">
        <div className="text-white font-bold">
          {value}
        </div>
      </label>
    </div>
  )
}

function Select() {
  return(
    <div className="flex">
      <select id="countries" className="rounded-lg m-1 px-4 text-center dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected hidden>Choose Credit</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  )
}

function Separator() {
  return (
    <div className="h-auto border-l-4 border-solid border-green-500 mx-2"/>
  )
}

function InputGroup() {
  const input_id = uuid().toString();
  return (
    <div className="flex m-3">
      <Select/>
      <Separator/>
      <RadioGroup>
        <RadioGroupItem name={'Grade-' + input_id} value="A"/>
        <RadioGroupItem name={'Grade-' + input_id} value="B"/>
        <RadioGroupItem name={'Grade-' + input_id} value="C"/>
        <RadioGroupItem name={'Grade-' + input_id} value="D"/>
        <RadioGroupItem name={'Grade-' + input_id} value="E"/>
        <RadioGroupItem name={'Grade-' + input_id} value="F"/>
      </RadioGroup>
      <Separator/>
      <RadioGroup>
        <RadioGroupItem name={'Modifier-' + input_id} value="-"/>
        <RadioGroupItem name={'Modifier-' + input_id} value="+"/>
      </RadioGroup>
    </div>
  )
}

