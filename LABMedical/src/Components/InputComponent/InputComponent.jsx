import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import * as Styled from './InputComponent.style';

export const InputComponent = ({ label, type, id, placeholder, register, error, $width, $height }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return(
    <Styled.InputGroup $width={$width} $height={$height} >
      <Styled.Label $color={error && 'danger'} htmlFor={ id }>{ label }</Styled.Label>

      { type !== 'textarea' && 
        <Styled.InputContainer>
          <Styled.Input 
            $height={$height}
            $width={$width}
            $color={error && 'danger'} 
            type={ showPassword ? 'text' : type } 
            id={ id } 
            placeholder={ placeholder } 
            {...register}/>
          
          { type === 'password' && 
          
          <Styled.Icon 
            $color={error && 'danger'} 
            type='button' 
            onClick={handleShowPassword}>
                { !showPassword 
                    ? <MdVisibility/>
                    : <MdVisibilityOff/>
              }
            </Styled.Icon>
          }
        </Styled.InputContainer>
      }

      { type === 'textarea' &&
            <Styled.TextArea 
            $height={$height}
            $color={error && 'danger'} 
            id={ id } 
            placeholder={ placeholder } 
            {...register}/>
          }
    </Styled.InputGroup>
  )
}

InputComponent.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.any,
  error: PropTypes.any,
  $height: PropTypes.string,
  $width: PropTypes.string,
  $color: PropTypes.string,
}