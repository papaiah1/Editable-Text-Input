import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  Paragraph,
  Input,
  Button,
} from './styledComponents'

class TextInput extends Component {
  state = {
    userInput: '',
    isButtonClicked: false,
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeSave = event => {
    event.preventDefault()
    // Perform save functionality here
  }

  onClickButton = () => {
    this.setState(prevState => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }

  render() {
    const {userInput, isButtonClicked} = this.state
    const buttonText = isButtonClicked ? 'Edit' : 'Save'

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Inputs</Heading>
          <InputContainer>
            {isButtonClicked ? (
              <Paragraph>{userInput}</Paragraph>
            ) : (
              <Input
                type="text"
                onChange={this.onChangeInput}
                value={userInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {buttonText}
            </Button>
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default TextInput
