// GET method: http://localhost:9999/api/foo/X where X can be any number
// POST method: http://localhost:9999/api/foo where the body must be like 
//   { id: X } and X can be any number
// The application is ready to use Jest framework for your test cases
// What the endpoints do:

// GET http://localhost:9999/api/foo/X
// If X is divisible by 2, it returns 200 code with OK message
// If X is not a number, it returns 400 code with ERROR: Value X 
//  is not a number message
// Otherwise, it returns 501 error code

// POST http://localhost:9999/api/foo
// If body { id: 1 }, it returns 200 code with bar message
// If body { id: 2 }, it returns 200 code with bass message
// If body { id: anynumber }, it returns 200 code with unmatched message
// If body does not contain property id, it returns 400 code with ERROR: JSON body must contain id property message

const axios = require('axios').default;
const BASE_URL = "http://localhost:9999/api/foo";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function getApi(value: any) {
  try {
    let response = await axios.get(`${BASE_URL}/${value}`);
    return response;
  }
  catch(error)
  {
    console.log(error);
    return error;
  }
};


// const postApi = async (value: any) => {
//     try {
//       return await axios({
//           method: 'post',
//           url: "http://localhost:9999/api/foo",
//           Headers: {"Content-type": "application/json"},
//           data: {
//               id: value
//           }
//       });
//     } catch (e) {
//       return [];
//     }
//   };


// async function getApi(value:any) {
//     try {
//         return await axios.get(`${URL}/${value}`);
//       } catch (e) {
//         return [];
//     }
// }

describe("getFunctionality", () => {
  describe("when API get is divisible by 2", () => {
    it("should return OK", async () => {
      // given
      let value = 2;

      // when
      let response = await getApi(value);
      console.log(response);
      // then
      expect(response.data).toEqual("OK");
    });
  });

  // describe("when API not divisible by 2", () => {
  //   it("should return 'ERROR: Number x not divisible by 2'", async () => {
  //     // given
  //     const value = 3;

  //     // when
  //     const result = await getApi(value);
  //     console.log("test: ", result)
  //     // then
  //     expect(result).toContain("ERROR: Number ");
  //   });
  // });
});