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
const API_URL = "http://localhost:9999/api/foo";

async function getApi(value: any) {
  const response = await axios.get(`${API_URL}/${value}`)
  .then(response => (console.log("Sparta!")))
    return response;
};

const postApi = async (value: any) => {
    try {
      return await axios({
          method: 'post',
          url: API_URL,
          data: {
              id: value
          }
      });
    } catch (e) {
      return [];
    }
  };


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
      const value = 2;

      // when
      const result = await getApi(value);

      // then
      expect(result).toEqual("OK");
    });
  });

  describe("when API not divisible by 2", () => {
    it("should return 'ERROR: Number x not divisible by 2'", async () => {
      // given
      const value = 3;

      // when
      const result = await getApi(value);
      
      // then
      expect(result).toContain("ERROR: Number ");
    });
  });
});