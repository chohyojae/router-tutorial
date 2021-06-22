import React, { Component } from 'react';

class HistorySample extends Component {
  //뒤로 가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  //홈으로 이동
  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    //페이지 이동 시 질문
    this.unblock = this.props.history.block(
      'Do you really want to leave this page?',
    );
  }

  componentWillUnmount() {
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>Go Home</button>
      </div>
    );
  }
}

export default HistorySample;
