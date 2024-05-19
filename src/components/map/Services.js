import tt from "@tomtom-international/web-sdk-services"

tt.services
  .copyrights({
    key: "XX7HOEL6soES4SoXdCMsfCfhFZUTRhNb",
  })
  .then(function (results) {
    console.log("Copyrights", results)
  })
  .catch(function (reason) {
    console.log("Copyrights", reason)
  })