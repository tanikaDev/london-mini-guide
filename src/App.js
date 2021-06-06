// import data from "";
import "./App.css";

function App() {
  return (
    <div className="App container">
      <h1>City Mini Guide</h1>
      <div className="row mb-3 city-select-cont">
        <label
          for="colFormLabelSm"
          class="col-sm-2 col-form-label col-form-label-sm"
        >
          Choose City
        </label>
        <div className="col-5">
          <select class="form-select form-control-sm"></select>
        </div>
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-between category-btns-cont">
        <button type="button" className="btn category-btn">
          Pharmacies
        </button>
        <button type="button" className="btn category-btn">
          Schools&Colleges
        </button>
        <button type="button" className="btn category-btn">
          Hospitals
        </button>
        <button type="button" className="btn category-btn">
          Doctors
        </button>
      </div>
      <div className="row">
        <table class="info-table table table-striped">
          <thead>
            <tr>
              <th className="table-head" scope="col">
                #
              </th>
              <th className="table-head" scope="col">
                Name
              </th>
              <th className="table-head" scope="col">
                Phone
              </th>
              <th className="table-head" scope="col">
                Address
              </th>
              <th className="table-head" scope="col">
                Website
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="table-data" scope="row">
                1
              </th>
              <td className="table-data">Mark</td>
              <td className="table-data">Otto</td>
              <td className="table-data">@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
