// OptionGenerator.tsx
import React from 'react';
import CustomOption from './CustomOption.tsx';
import { Option } from '../Models/SidebarMenuModels.ts';

interface Props {
  options: Option[];
  onOptionClick: (id: number) => void;
}

const OptionGenerator: React.FC<Props> = ({ options, onOptionClick }) => {
  const renderOptions = () => {
    const elements = [];
    for (let i = 0; i < options.length; i++) {
      const option = options[i];
      elements.push(
        <CustomOption
          key={option.id}
          label={option.label}
          onClick={() => onOptionClick(option.id)}
        />
      );
    }
    return elements;
  };

  return <div className="option-generator">{renderOptions()}</div>;
};

export default OptionGenerator;
