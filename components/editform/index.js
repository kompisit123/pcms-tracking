import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function EditForm() {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  function openForm(){
    setOpen(true)
  }

  function createRow(event){

    event.preventDefault() // don't redirect page
    console.log("create data list")
    

    for (let i = 1; i <= event.target.list_no.value; i++) {
       
          let rowData ={
                "data": {
                          "quantity": null,
                          "unit": null,
                          "budget": null,
                          "status": null,
                          "remark": null,
                          "owner": null,
                          "year_budget": event.target.year_budget.value,
                          "detail_plan": event.target.detail_plan.value,
                          "bid_no": event.target.bid_no.value,
                          "list_no": i,
                          "item_no": null,
                          "item_name": null,
                          "date_contract": "2021-11-09"
                      }
              }
        

        var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer cff0c3992591b70c40eab298c01cb784593fd949f9f01a3e1af4c0f184ccb3a7e496c545c15c11b883cb866bf662235a8b4dfd61a1734922dacfe1b0133b54eb07574016474eb795d0e58d700675967de05fb015b5026bad55e71690395aa35aaa519fb07e0d4268a87899af6609b68e0496efc66faa1396fd99b7f3380cc986");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify(rowData);
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:1337/api/stocks", requestOptions)
  .then(response => response.json())
  //.then(result => console.log(result))
  .then(result => {
    console.log(result)
    if(i == event.target.list_no.value){
       location.reload()
    }
   
 })
  .catch(error => console.log('error', error));

      }

  }

  async function testfunction (event){
    event.preventDefault() // don't redirect page
    let identifier = event.target.bid_no.value
    let password = event.target.year_budget.value
    console.log("Heyyyyyyy")
    console.log(identifier+password)
  }

  return (
    <>
     <div className="rounded-md px-2 py-3">
            <button onClick={ openForm }   
                    className="flex justify-center items-center font-light bg-purple-600 hover:bg-violet-800 px-3 py-1 rounded-lg text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:bg-gray-400" 
                    // disabled={status.loading}
                    type="button">
                สร้างรายการแผนการจัดซื้อ/จ้าง/เช่า
            </button>   
        </div>

        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        เพิ่มข้อมูล
                      </Dialog.Title>
                      <div className="mt-2">
                    
                        <form onSubmit={ createRow }>
                <div className="overflow-hidden  sm:rounded-md">
                  <div className="bg-white px-0 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          ปีที่ได้รับงบประมาณ
                        </label>
                        {/* <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        /> */}
                          <select
                          id="year_budget"
                          name="year_budget"
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>2565</option>
                          <option>2564</option>
                          <option>2563</option>
                          <option>2562</option>
                        </select>
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Bid No.
                        </label>
                        <input
                          type="text"
                          id="bid_no"
                          name="bid_no"
                          required
                          className="mt-1 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          รายการแผนจัดซื้อจ้างเช่า
                        </label>
                        <input
                          type="text"
                          id="detail_plan"
                          name="detail_plan"
                          required
                          className="mt-1 py-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
  
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          จำนวนรายการ
                        </label>
                        <select
                          id="list_no"
                          name="list_no"
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>

                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        สัญญาลงวันที่
                      </label>
                       
                      {/* <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      /> */}
                    </div>         
  
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          หลังจากท่านสร้างรายการแผนการจัดซื้อ/จ้าง/เช่าแล้ว จะสามารถเพิ่มรายการได้ตามจำนวนที่ท่านได้เพิ่มไว้
                        </label>
                        {/* <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          autoComplete="street-address"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        /> */}
                      </div>
                    </div>
                  </div>
                 
                  <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    // ref={cancelButtonRef}
                  >
                    ยกเลิก
                  </button>
        
                  <button
                type="submit" 
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-600 hover:bg-violet-800 py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
              >
                สร้างรายการ
              </button>
                 
                </div>
                </div>
              </form>
                      </div>
                    </div>
                  </div>
                </div>
               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    </>
   
  )
}
