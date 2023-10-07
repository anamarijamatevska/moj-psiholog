import React, { memo, useCallback, useEffect, useState } from 'react'
import Success from '../Success/Success'
import SwiperComponent from '../Swiper/Swiper'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { getFirebaseConfig } from '../../helpers/firebaseHelpers'
import ModalComponent from '../Modal/Modal'

import 'swiper/css'
import 'swiper/css/navigation'
import './Flow.css'

const Flow = ({ isSessionBooked, setIsSessionBooked }) => {
  const [isDone, setIsDone] = useState()
  const [, setCategory] = useState()
  const [userTherapists, setUserTherapists] = useState()
  const [activeTherapist, setActiveTherapist] = useState()
  const [date, setDate] = useState()
  const [session, setSession] = useState()
  const [show, setShow] = useState(false)
  const [questions, setQuestions] = useState()
  const [therapists, setTherapists] = useState()

  const { db, auth } = getFirebaseConfig()

  const getQuestions = useCallback(async () => {
    const data = await getDocs(collection(db, "question"))
    const questionsData = []

    data?.forEach((question) => {
      questionsData.push(question.data())
    })

    questionsData?.sort((a, b) => a.order - b.order)

    setQuestions(questionsData)
  }, [db]);

  const getTherapists = useCallback(async () => {
    const data = await getDocs(collection(db, "therapist"))
    const therapistsData = []

    data?.forEach((therapist) => {
      therapistsData.push(therapist.data())
    })

    setTherapists(therapistsData)
  }, [db]);

  useEffect(() => {
    getQuestions()
    getTherapists()
  }, [getQuestions, getTherapists])

  const answers = {}

  const handleClose = async (therapist) => {
    setIsSessionBooked(true)
    setShow(false)
    setIsDone(false)
    await addDoc(collection(db, "user-therapist"), {
      user: auth?.currentUser?.email,
      therapist,
      createdAt: new Date()
    });
  }
  const handleShow = () => setShow(true)
  const handleModalHide = () => setShow(false)

  const onAnswerClick = (category, index, e) => {
    Array.from(document.getElementsByClassName(e.target.className))?.forEach((question) => question.className = e.target.className)
    e.target.className += ' active'

    if (Object.keys(answers).length === 0) {
      answers[index] = {}
      answers[index].category = category
      answers[index].index = index
    }

    if (!answers[index]) {
      answers[index] = {}
      answers[index].category = category
      answers[index].index = index
    }

    if (answers[index]?.index === index) {
      answers[index].category = category
      answers[index].index = index
    }

    if (questions?.length === Object.keys(answers).length) {
      const userAnswers = Object.values(answers).map((x) => x)
      const therapistGender = userAnswers[userAnswers.length - 1]

      const topAnswers = {}

      userAnswers.forEach(element => {
        topAnswers[element.category] = (topAnswers[element.category] || 0) + 1
      })

      const topAnswersSorted = Object.entries(topAnswers).sort((a, b) => b[1] - a[1])
      const topAnswer = topAnswersSorted[0][0]

      const therapistsList = therapists.filter((therapist) => therapist.category === topAnswer && therapist.gender === therapistGender.category)

      localStorage.setItem('therapists', JSON.stringify(therapistsList))
      setUserTherapists(therapistsList)
      setCategory(topAnswer)
      setIsDone(true)
    }
  }

  const cardClickHandler = (value) => setSession(value)
  const handleDatePick = (event) => setDate(event.target.value)

  if (isDone) {
    return (
      <ModalComponent
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        handleHide={handleModalHide}
        activeTherapist={activeTherapist}
        handleDatePick={handleDatePick}
        cardClickHandler={cardClickHandler}
        date={date}
        session={session}
        userTherapists={userTherapists}
        setActiveTherapist={setActiveTherapist}
      />
    )
  }

  if (isSessionBooked) {
    return (
      <Success />
    )
  }

  return (
    <SwiperComponent
      questions={questions}
      onAnswerClick={onAnswerClick}
    />
  )
}

export default memo(Flow)
