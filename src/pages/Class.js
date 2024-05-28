import React from 'react'
import TaskPart from '../components/classComponents/TaskPart'
import { useState } from 'react'
import axios from "axios";

const Class = () => {
    const [click, setClick] = useState(false)
    const [data, setData] = useState([])

    function handle1 (){
        setClick(true);
        axios
        .get("http://localhost:8800/api/class/6655cece8a88ff8116e18a87")
        .then((response) => {
        //   console.log(response.data);
           setData(response.data)// This should log the data from the Capstone collection
        })
        .catch((error) => {
          console.error(error); // This will log any errors that occur
        });
    }
    console.log(data)

  return (
    
    <div class="Body_body__box__Y49P-">
        <div class="Body_body__wrapper__6cj6C">
          <div class="Body_body__content__full__1L5Pm">
            <div class="row-container">
              <div class="class-content">
                <div
                  class="class-head d-flex px-3"
                  style={{ justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <h3 class="classhead m-0 text-white">
                    Join the class on time!
                  </h3>
                  <div></div>
                </div>
          { click ? <TaskPart data ={data}/> : (    <div class="session-container">
                  <div class="session-area">
                    <span style={{ fontSize: 24, fontWeight: 500 }}>
                      No session title available
                    </span>
                    <br/>Class schedule is not updated<hr/>
                    <div class="preread-head">Contents:</div>
                    <div class="ml-3">
                      <span class="preread" style={{ whiteSpace: 'pre-wrap' }}>
                        No content available
                      </span>
                    </div>
                    <div class="preread-head mt-3">Pre-read:</div>
                    <div class="ml-3">
                      <span class="preread" style={{ whiteSpace: 'pre-wrap' }}>
                        No preread available
                      </span>
                    </div>
                  </div>
                </div>)}
                <div class="mb-4"></div>
              </div>
              <div class="sideContainer">
                <div class="roadmap-container justify-self-center">
                  <div class="roadmap-area">
                    <div class="progress-head">
                      <span class="progress-header">Sessions Roadmap</span>
                    </div>
                    <div>
                      <div class="sessionsContainer">
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>1</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>2</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>3</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>4</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>5</h6>
                          <div
                            class="step_path_bottom"
                            style={{ pointerEvents: "none" }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>10</h6>
                          <div
                            class="step_path_bottom"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>9</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>8</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>7</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>6</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>11</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>12</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>13</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>14</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>15</h6>

                          <div
                            class="step_path_bottom"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>20</h6>
                          <div
                            class="step_path_bottom"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>19</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>18</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>17</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>16</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>21</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>22</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>23</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>24</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>25</h6>
                          <div
                            class="step_path_bottom"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>30</h6>
                          <div
                            class="step_path_bottom"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>29</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>28</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>27</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>26</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>31</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>32</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>33</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>34</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>35</h6>
                          <div
                            class="step_path_bottom"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>40</h6>
                          <div
                            class="step_path_bottom"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>39</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>38</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>37</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>36</h6>
                          <div
                            class="step_path_left"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>41</h6>
                          <div
                            class="step_path_right"
                            style={{ pointerEvents: 'none' }}
                          ></div>
                        </div>
                        <div class="roadmap_icon_container RICompleted"  onClick={handle1}>
                          <h6>42</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="roadmap-container mt-2">
                  <div class="roadmap-area">
                    <div class="progress-head d-flex justify-content-between">
                      <span class="progress-header">Additional Sessions</span>
                    </div>
                    <div class="addSessionContainer">
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>System Design Day 2</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          15/10/2023 - Sunday - 2:00 PM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>System Design Day 1</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          14/10/2023 - Saturday - 2:00 PM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          System Design Recordings Day 2
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          Class Schedule Not Updated
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          System Design Recordings Day 1
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          Class Schedule Not Updated
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>DS Day 5</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          25/08/2023 - Friday - 7:30 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>DS Day 4</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          24/08/2023 - Thursday - 7:30 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>DS Day 3</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          23/08/2023 - Wednesday - 7:30 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>DS Day 2</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          22/08/2023 - Tuesday - 7:30 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>DS Day 1</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          21/08/2023 - Monday - 7:30 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>AWS Day 5</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          17/08/2023 - Thursday - 4:30 PM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>AWS Day 4</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          16/08/2023 - Wednesday - 4:30 PM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>AWS Day 3</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          11/08/2023 - Friday - 11:30 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>AWS Day 2</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          10/08/2023 - Thursday - 4:30 PM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>AWS Day 1</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          09/08/2023 - Wednesday - 4:30 PM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>FSD Demo Day 2</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          03/08/2023 - Thursday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>FSD Demo Day 1</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          02/08/2023 - Wednesday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          Recap &amp; Doubt Clarification
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          21/07/2023 - Friday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          Recap &amp; Doubt Clarification
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          14/07/2023 - Friday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>Redux Day 2</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          13/07/2023 - Thursday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>React Recap</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          07/07/2023 - Friday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>React Day 2 cont</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          23/06/2023 - Friday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          Recap &amp; Doubt Clarification
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          13/06/2023 - Tuesday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>JS Recap</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          24/05/2023 - Wednesday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          Github Session - 11/05/2023 @8 AM
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          11/05/2023 - Thursday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          Codekata Day 5 - 10/05/2023 @8 AM
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          10/05/2023 - Wednesday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          Codekata Day 4 - 09/05/2023 @8 AM
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          09/05/2023 - Tuesday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          Codekata Day 3 - 08/05/2023 @8 AM
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          08/05/2023 - Monday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          Codekata Day 2 - 05/05/2023 @8 AM
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          05/05/2023 - Friday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>
                          Codekata Day 1 - 04/05/2023 @8 AM
                        </h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          04/05/2023 - Thursday - 8:00 AM
                        </p>
                      </div>
                      <div class="addSession">
                        <h5 style={{ fontWeight: 450 }}>Day 0 Demo</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          Class Schedule Not Updated
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="" bis_skin_checked="1"></div>
            <div
              class="modal fade WelcomeModal "
              id="WelcomeModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style={{ display: 'none' }}
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content modal-height radius">
                  <div class="modal-heading-area px-4 py-2">
                    <div class="d-flex justify-content-between">
                      <span class="modal-heading">Class Link </span>
                      <span class="close m-4" style={{ cursor: 'pointer' }}>
                        ×
                      </span>
                    </div>
                  </div>
                  <div class="row m-4">
                    <div class="col">
                      <div class="row">
                        <div class="col-3">Class Link : </div>
                        <a class="" target="_blank" rel="noreferrer">
                          <div class="col word-wrap"></div>
                        </a>
                      </div>
                      <div class="row">
                        <div class="col-3">Passcode : </div>
                        <div class="col"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="" bis_skin_checked="1"></div>
            <div
              class="modal fade WelcomeModal "
              id="WelcomeModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style={{ display: 'none' }}
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content modal-height radius">
                  <div class="modal-heading-area px-4 py-2">
                    <div class="d-flex justify-content-between">
                      <span class="modal-heading">Recording Link</span>
                      <span class="close m-4" style={{ cursor: 'pointer' }}>
                        ×
                      </span>
                    </div>
                  </div>
                  <div class="row m-4">
                    <div class="col">
                      <div class="row">
                        <div class="col-4">Recording Link : </div>
                        <a class="" target="_blank" rel="noreferrer">
                          <div class="col word-wrap"></div>
                        </a>
                      </div>
                      <div class="row">
                        <div class="col-3">Passcode : </div>
                        <div class="col"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <div class="" bis_skin_checked="1"></div>
            <div
              class="modal fade WelcomeModal "
              id="WelcomeModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              style={{ display: 'none' }}
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content modal-height radius">
                  <div class="modal-heading-area px-4 py-2">
                    <div class="d-flex justify-content-between">
                      <span class="modal-heading font-weight-bold"></span>
                    </div>
                  </div>
                  <div class="modal-body">
                    <br/>
                    <p class="font-weight-bold"style={{ fontSize: 18 }}>hh</p>
                    <p
                      class="text-success font-weight-bold"
                      style={{ fontSize: 21 }}
                    >hfh</p>
                    
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-success">Got It</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Class