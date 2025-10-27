export const Services = (props) => {

  return (

    <div id="services" className="text-center">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/Mapa.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="service-text">
              <h2 style={{ color: '#d1a019', textAlign: 'center' }}>Conquista territirios</h2>
              <p style={{ color: '#d5d4d4ff', textAlign: 'center' }}>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};