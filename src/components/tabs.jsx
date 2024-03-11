import { useState } from 'react'

export const Tabs = ({ tabsContent, onChange}) => {
  
    const [tabIndex, setTabIndex] = useState(0);

    const handleClick = (index) => {
      setTabIndex(index);
      onChange(index);
    }

    return (
    <div className="wrapper">
      <div className="header">
        {
          tabsContent.map((tabs, index) => (
              <div className={`tab ${tabIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)} key={tabs.label}>
                <span className="label">{tabs.label}</span>
            </div>
          ))
        }
      </div>
      <div className="content">
        {
            tabsContent[tabIndex] && tabsContent[tabIndex].content
        }
      </div>
    </div>
  )
}
