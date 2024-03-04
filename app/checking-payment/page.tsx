"use client";
import React, { use, useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader'
import { useCheckPaymentQuery } from '@/redux/features/orders/ordersApi'
import { redirect, useSearchParams } from 'next/navigation'
import toast from "react-hot-toast";

const page = () => {
    const searchParams = useSearchParams()
    const refId = searchParams?.get('refId')
    console.log("🚀 ~ page ~ refId:", refId)

    const [fetchCount, setFetchCount] = useState(0);
    const maxFetchCount = 10; // Maximum number of fetches

    const { data, isLoading, isError, isSuccess, refetch, error } = useCheckPaymentQuery(refId,
        { refetchOnMountOrArgChange: true })


    useEffect(() => {

        const intervalId = setInterval(() => {
            if (fetchCount < maxFetchCount) {
                refetch();
                setFetchCount(prevCount => prevCount + 1)
            } else {
                clearInterval(intervalId);
            }
        }, 3000);

        return () => clearInterval(intervalId);

    }, [fetchCount])

    useEffect(() => {
        if (isSuccess && data?.success) {
            toast.success('ชำระเงินสำเร็จ')
            redirect(`/course-access/${data?.courseId}`)
        }

        if (error && fetchCount === maxFetchCount) {
            if ("data" in error) {
                const errorMessage = error as any;
                toast.error(errorMessage.data.message, { duration: 5000 });
            }
        }

    }, [data, isLoading, isSuccess, fetchCount])


    return (
        <div>
            <Loader text={'กำลังตรวจสอบการชำระเงิน...'} />

        </div>
    )
}

export default page