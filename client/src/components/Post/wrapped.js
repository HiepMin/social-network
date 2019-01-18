import styled from 'styled-components';

export default styled.div`
    position: relative;
  .post {
    border-radius: .7rem;
    padding: 1.3rem;
    margin-bottom: 1.4rem;
    box-shadow: 0px 4px 9px 0px #dcdcdc;
    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.6rem;
      .authorDesc{
          display: flex;
          justify-content: center;
          align-items: center;
          &__NameDate{
            .authorName{
                color: #365899;
                font-size: 1.3rem;
                display: inline-block;
                margin-bottom: 2px;
                font-family: monospace;
            }
            .date{
                color: grey;
                font-size: 11px;
                font-weight: bold;
            }
          }
      }
      .operate{
          .btnLike {
              .fi{
                  font-size: 13px !important;
              }
          }
      }
    }
    &__content{
      .post__main{
          color: #242424;
          font: {
              size: 14px;
              family: monospace;
              weight: bold;
          }
          text-indent: 1rem;
          text-align: justify;
      }
    }
    &__desc{
      font-size: 12px;
      margin-top: 10px;
      color: grey;
      font-weight: bold;
      display: flex;
      justify-content: flex-end;
      &--amountLike, &--amountComment{
          span{
              margin-right: 5px;
              font-size: 15px;
              display: inline-block;
          }
          i {
              font-size: 1rem;
          }
      }
      .is-actived {
          color: #6c6ce2;
      }
      .oneBlockDesc{
          margin-right: 1rem;
      }
    }
    &__action {
        display: flex;
        margin-top: 2rem;
        padding-top: 4px;
        border-top: 1px solid #f2f2f296;
        .btnAction {
            box-shadow: none;
            border-radius: 6px;
            padding: 6px;
            font-size: 14px;
            &:hover {
                background: #e4e4e46b;
            }
        }
    }
    &__form-comment {
        display: flex;
        align-items: center;
        margin: 1rem 0;
        form{
            display: flex;
            align-items: center;
            flex-grow: 1;
        }
    }
    &__comments {
        margin-top: 1.4rem;
    }
    .one-block-comment {
        display: flex;
        margin-bottom: 1rem;
        .avatar {
            width: 10%;
            text-align: center;
            margin-top: 10px;
        }
        .main{
            padding: 10px 19px;
            background: #e9e9e97d;
            border-radius: 12px;
            width: 90%;
            position: relative;
            .text {
                a {
                    font-size: 13px;
                    color: #365899;
                }
                p {
                    color: #0f0f0f;
                    font-size: 12px;
                    margin-top: 5px;
                    margin-bottom: 10px;
                }
            }
            .commentDate  {
                text-align: right;
                color: #595959;
                font-size: 14px;
            }
            
        }
    }
    &--white{
      background: #fff;
    }
    .TitleComment {
        color: gray;
        text-align: center;
    }
  }
`;
