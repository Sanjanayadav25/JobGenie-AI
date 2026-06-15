import { InterviewContext } from "./interview.context"
import { useState } from "react"

export const InterviewProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [report, setReport] = useState(null)
    const [reports, setReports] = useState([])
    const [loadingmessage, setLoadingMessage] = useState(false)

    return (
        <InterviewContext.Provider value={{ loading,loadingmessage, setLoading, report, setReport, reports, setReports , setLoadingMessage }}>
            {children}
        </InterviewContext.Provider>
    )
}