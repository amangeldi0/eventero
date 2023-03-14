import { FC } from 'react';

import cls from '../EventPage.module.scss';

interface IFrameProps {
    index: string
}

export const IFrame:FC<IFrameProps> = (props) => {
    const { index } = props;

    return (
        <div className={cls.video}>
            <iframe
                className={cls.iFrame}
                src={`https://www.youtube.com/embed/${index}`}
                title="Youtube video"
            />
        </div>

    );
};
