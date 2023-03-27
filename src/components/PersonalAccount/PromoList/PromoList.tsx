import React from 'react';
import promo1000 from '../../../asserts/promo1000.svg'
import promo100 from '../../../asserts/promo100.svg'
import promo400 from '../../../asserts/promo400.svg'
import {PromoItem} from '../PromoItem/PromoItem'
import cl from './PromoList.module.sass'


interface Props {
    state: boolean
}


export const PromoList = ({state}: Props) => {
    return (
        <div>
            {state ?
                <div className={cl.promoList}>
                    <PromoItem
                        imgPromo={promo1000}
                        dataProp={'25.09.2021'}
                        link={'adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...'}/>

                    <PromoItem
                        imgPromo={promo100}
                        dataProp={'25.09.2021'}
                        link={'adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...'}/>

                    <PromoItem
                        imgPromo={promo400}
                        dataProp={'25.09.2021'}
                        link={'adidas.com/clothes/WddfJfsf7dt6fsHFIuj5пdfsZFu...'}/>

                </div>
                :
                null
            }

        </div>
    );
};

