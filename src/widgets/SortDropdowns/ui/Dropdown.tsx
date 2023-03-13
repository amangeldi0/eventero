import { XMarkIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';
import {
    FC, MouseEvent, useRef, useState,
} from 'react';

import { classnames } from '@/shared/helpers/classnames';
import { useClickOutside } from '@/shared/hooks/useClickOutside';

import cls from './Dropdown.module.scss';

interface DropdownProps {
    dropArray: string[];
    title: string;
}
export const Dropdown: FC<DropdownProps> = (props) => {
    const { dropArray, title } = props;
    const [select, setSelect] = useState<string>(title);
    const [showSelect, setShowSelect] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, () => setShowSelect(false));

    const onShowSelect = ():void => {
        setShowSelect((prevState) => !prevState);
    };

    const onClear = (event: MouseEvent<SVGSVGElement>):void => {
        event.stopPropagation();
        setSelect(title);
    };

    return (
        <div
            className={classnames(cls.dropdownContainer, { [cls.dropdownContainerPrimary]: title !== select })}
            onClick={onShowSelect}
            role="presentation"
            ref={ref}
        >
            <div
                className={classnames(cls.title, { [cls.titlePrimary]: title !== select })}
            >
                {title === select ? title : select}
            </div>
            {select === title
                ? (
                    <PlayIcon
                        className={classnames(cls.dropIcon, { [cls.rotate]: showSelect })}
                    />
                )
                : (
                    <XMarkIcon
                        className={classnames(cls.clearIcon, { [cls.clearPrimary]: title !== select })}
                        onClick={(event) => onClear(event)}
                    />
                )}
            <div className={classnames(cls.dropdown, { [cls.showSelect]: showSelect })}>
                {dropArray.map((value) => (
                    <div
                        className={cls.dropdownItem}
                        role="presentation"
                        onClick={async () => {
                            await setSelect(value);
                            await setShowSelect(false);
                        }}

                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
};
