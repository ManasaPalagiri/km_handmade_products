import styled from 'styled-components';

const ListWrapper = styled.div`
  font-family: 'Roboto Condensed', sans-serif;
  .products-info {
    background-color: #fff;
    text-align: center;
  }

  .wrapper-item {
    background: white;
    margin: auto;
    position: relative;
    overflow: hidden;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0;
    transform: scale(0.95);
    transition: box-shadow 0.5s, transform 0.5s;
  }
  .wrapper-item:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }
  .wrapper-item .container-item {
    width: 100%;
    height: 100%;
  }
  .wrapper-item .container-item .top {
    height: 80%;
    width: 100%;
    -webkit-background-size: 100%;
    -moz-background-size: 100%;
    -o-background-size: 100%;
    background-size: 100%;
  }
  .wrapper-item .container-item .bottom {
    width: 200%;
    height: 20%;
    transition: transform 0.5s;
  }
  .wrapper-item .container-item .bottom.clicked {
    transform: translateX(-50%);
  }
  .wrapper-item .container-item .bottom h1 {
    margin: 0;
    padding: 0;
  }
  .wrapper-item .container-item .bottom p {
    margin: 0;
    padding: 0;
  }
  .wrapper-item .container-item .bottom .left {
    height: 100%;
    width: 50%;
    background: #f4f4f4;
    position: relative;
    float: left;
  }
  .wrapper-item .container-item .bottom .left .details {
    padding: 20px;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
  }
  .wrapper-item .container-item .bottom .left .buy {
    float: right;
    width: calc(30% - 2px);
    height: 100%;
    background: #f1f1f1;
    transition: background 0.5s;
    border-left: solid thin rgba(0, 0, 0, 0.1);
  }
  .wrapper-item .container-item .bottom .left .buy i {
    font-size: 30px;
    padding: 30px;
    color: #254053;
    transition: transform 0.5s;
  }
  .wrapper-item .container-item .bottom .left .buy:hover {
    background: #a6cdde;
  }
  .wrapper-item .container-item .bottom .left .buy:hover i {
    transform: translateY(5px);
    color: #00394b;
  }
  .wrapper-item .container-item .bottom .right {
    width: 50%;
    background: #a6cdde;
    color: white;
    float: right;
    height: 200%;
    overflow: hidden;
  }
  .wrapper-item .container-item .bottom .right .details {
    padding: 20px;
    float: right;
    width: calc(70% - 40px);
  }
  .wrapper-item .container-item .bottom .right .done {
    width: calc(30% - 2px);
    float: left;
    transition: transform 0.5s;
    border-right: solid thin rgba(255, 255, 255, 0.3);
    height: 50%;
  }
  .wrapper-item .container-item .bottom .right .done i {
    font-size: 30px;
    padding: 30px;
    color: white;
  }
  .wrapper-item .container-item .bottom .right .remove {
    width: calc(30% - 1px);
    clear: both;
    border-right: solid thin rgba(255, 255, 255, 0.3);
    height: 50%;
    background: #bc3b59;
    transition: transform 0.5s, background 0.5s;
  }
  .wrapper-item .container-item .bottom .right .remove:hover {
    background: #9b2847;
  }
  .wrapper-item .container-item .bottom .right .remove:hover i {
    transform: translateY(5px);
  }
  .wrapper-item .container-item .bottom .right .remove i {
    transition: transform 0.5s;
    font-size: 30px;
    padding: 30px;
    color: white;
  }
  .wrapper-item .container-item .bottom .right:hover .remove,
  .wrapper-item .container-item .bottom .right:hover .done {
    transform: translateY(-100%);
  }
  .wrapper-item .inside {
    z-index: 9;
    background: #92879b;
    width: 140px;
    height: 140px;
    position: absolute;
    top: -70px;
    right: -70px;
    border-radius: 0px 0px 200px 200px;
    transition: all 0.5s, border-radius 2s, top 1s;
    overflow: hidden;
  }
  .wrapper-item .inside .icon {
    position: absolute;
    right: 85px;
    top: 85px;
    color: white;
    opacity: 1;
  }
  .wrapper-item .inside:hover {
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0;
    height: 80%;
  }
  .wrapper-item .inside:hover .icon {
    opacity: 0;
    right: 15px;
    top: 15px;
  }
  .wrapper-item .inside:hover .contents {
    opacity: 1;
    transform: scale(1);
    transform: translateY(0);
  }
  .wrapper-item .inside .contents {
    padding: 5%;
    opacity: 0;
    transform: scale(0.5);
    transform: translateY(-200%);
    transition: opacity 0.2s, transform 0.8s;
  }
  .wrapper-item .inside .contents table {
    text-align: left;
    width: 100%;
  }
  .wrapper-item .inside .contents h1,
  .wrapper-item .inside .contents p,
  .wrapper-item .inside .contents table {
    color: white;
  }
  .wrapper-item .inside .contents p {
    font-size: 13px;
  }
`;

export default ListWrapper;
