import React from 'react'

interface settingProps {
  settingOption: string[];
}

export const SettingPopup: React.FC<settingProps>  = ({ settingOption }) => {
  
  return (
    <div>
      <ul>
        {settingOption?.map((option, index) => {
          return (
            <li key={index}>{option}</li> 
          )
        })}
      </ul>
    </div>
  )
}
