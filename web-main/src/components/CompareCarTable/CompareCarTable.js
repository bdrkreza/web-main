import React from "react";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import Body from "../../assets/compare-car-size.svg";
import Engine from "../../assets/compare-car-engine.svg";
import Piston from "../../assets/compare-car-piston.svg";
import Torque from "../../assets/compare-car-torque.svg";
import Transmission from "../../assets/compare-car-transmission.svg";

function CompareCarTable() {
  return (
    <TableDiv>
      <Container maxWidth="lg">
        <Grid container className="table-header">
          <Grid item xs={5} className="car-name">
            <p>Honda</p>
            <h1>Accord</h1>
          </Grid>
          <Grid item xs={2} className="car-name-vs">
            <h1>vs</h1>
          </Grid>
          <Grid item xs={5} className="car-name">
            <p>hyundai</p>
            <h1>Sonata 2.0</h1>
          </Grid>
        </Grid>

        <Grid container className="table-header">
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-header">LENGTH X WIDTH X HEIGTH (MM)</p>
            <p className="point-description">4900 X 1860 X 1445</p>
          </Grid>
          <Grid container item xs={2} justify="center" alignItems="center" className="car-difference-topic-pic">
            <img src={Body} alt="Car Body" />
          </Grid>
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-header">LENGTH X WIDTH X HEIGTH (MM)</p>
            <p className="point-description">4900 X 1860 X 1445</p>
          </Grid>
        </Grid>

        <Grid container className="table-header">
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-description">1.5L TURBO</p>
            <p className="point-header">DOHC 16-VALVE DUAL VTEC</p>
          </Grid>
          <Grid container item xs={2} justify="center" alignItems="center" className="car-difference-topic-pic">
            <img src={Engine} alt="Car Engine" />
          </Grid>
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-description">2.0L</p>
            <p className="point-header">DOHC 16-VALVE DUAL CWT</p>
          </Grid>
        </Grid>

        <Grid container className="table-header">
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-description">180HP</p>
            <p className="point-header">Horsepower</p>
          </Grid>
          <Grid container item xs={2} justify="center" alignItems="center" className="car-difference-topic-pic">
            <img src={Piston} alt="Car Piston" />
          </Grid>
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-description">150HP</p>
            <p className="point-header">Horsepower</p>
          </Grid>
        </Grid>

        <Grid container className="table-header">
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-description">233Nm</p>
            <p className="point-header">torque</p>
          </Grid>
          <Grid container item xs={2} justify="center" alignItems="center" className="car-difference-topic-pic">
            <img src={Torque} alt="car-torque" />
          </Grid>
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-description">192Nm</p>
            <p className="point-header">torque</p>
          </Grid>
        </Grid>

        <Grid container className="table-header">
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-description">CVT</p>
            <p className="point-header">automatic</p>
          </Grid>
          <Grid container item xs={2} justify="center" alignItems="center" className="car-difference-topic-pic">
            <img src={Transmission} alt="Car Transmission" />
          </Grid>
          <Grid item xs={5} className="car-difference-topic">
            <p className="point-description">6 speed</p>
            <p className="point-header">automatic</p>
          </Grid>
        </Grid>
      </Container>
    </TableDiv>
  );
}

const TableDiv = styled.div`
    padding-top: 10px;
    font-family: "Open Sans";
    text-transform: uppercase;
    color: #ffffff;
    .table-header{
        margin-top: 10px;
        background-color: #f06424;
        display: flex;
        justify-content: space-between;
        color: white;
        .car-name{
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p{
                font-size: 24px;
                font-weight: 700;
            }
            h1{
                font-size: 40px;
                margin: 0;
            }
        }
        .car-name-vs{
            text-align: center;
            h1{
                font-size: 40px;
            }
        }
        .car-difference-topic{
            flex-direction: column;
            letter-spacing: 2px;
            text-align: center;
            padding: 10px;
            position: relative;
            .point-header{
                font-size: 20px;
                font-weight: 700;
            }
            .point-description{
                font-size: 24px;
                margin: 0;
            }
            
        }
        .car-difference-topic-pic{
            text-align: center;
            background-color: #e8e8e8;
        }

    }

    @media(max-width: 1024px){
        padding-top: 15px;
        .table-header{
            .car-difference-topic{
                .point-header{
                    font-size: 18px;
                }
            }
        }
    }

    @media(max-width: 768px){
        padding-top: 5px;
        .table-header{
                .car-name{
                    p{
                        font-size: 20px;
                    }
                    h1{
                        font-size: 35px;
                    }
                }
                .car-difference-topic{
                    flex-direction: column;
                    letter-spacing: 2px;
                    text-align: center;
                    padding: 10px;
                    position: relative;
                    .point-header{
                        font-size: 12px;
                        font-weight: 700;
                    }
                    .point-description{
                        font-size: 22px;
                        margin: 0;
                    }
                    
                }
                .car-difference-topic-pic{
                    img{
                        height: 20px;
                    }
                }
        }
    }

    @media(max-width: 425px){
        .table-header{
                .car-name{
                    h1{
                        font-size: 20px;
                    }
                }
                .car-name-vs{
                    h1{
                        font-size: 25px;
                    }   
                }
                .car-difference-topic{
                    flex-direction: column;
                    letter-spacing: 2px;
                    text-align: center;
                    position: relative;
                    .point-header{
                        font-size: 7px;
                        font-weight: 700;
                    }
                    .point-description{
                        font-size: 9px;
                        margin: 0;
                    }
                    
                }
                .car-difference-topic-pic{
                    text-align: center;
                    img{
                        height: 20px;
                    }
                }
        }
    }

    @media(max-width: 375px){
        .table-header{
            .car-name{
                h1{
                    font-size: 18px;
                }
                p{
                  font-size: 18px;
                }
            }
            .car-difference-topic{
                flex-direction: column;
                letter-spacing: 2px;
                text-align: center;
                position: relative;
                line-height: 12px;
                .point-header{
                    font-size: 8px;
                    font-weight: 700;
                    line-height: 8px;
                }
                .point-description{
                    font-size: 9px;
                    margin: 0;
                }
                
            }
            .car-difference-topic-pic{
                text-align: center;
                img{
                    height: 15px;
            }
        }
    }
    }

    @media(max-width: 320px){
        .table-header{
            .car-name{
                p{
                    font-size: 15px;
                }
                h1{
                    font-size: 15px;
                }
            }
            .car-name-vs{
                h1{
                    font-size: 30px;
                }   
            }  
            .car-difference-topic{
                letter-spacing: 2px;
                text-align: center;
                position: relative;
                line-height: 12px;
                .point-header{
                    font-size: 7px;
                    font-weight: 700;
                    line-height: 7px;
                }
                .point-description{
                    font-size: 7px;
                    margin: 0;
                }
                
            }
            .car-difference-topic-pic{
                text-align: center;
                img{
                    height: 10px;
            }
        }
    }

`;

export default CompareCarTable;
