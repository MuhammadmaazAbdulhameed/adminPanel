// ** Custom Components
import Avatar from "@components/avatar"

// ** Third Party Components

// ** Reactstrap Imports
import { Card, CardBody } from "reactstrap"

// ** Default Options
const StatsCard = ({ count, title }) => {
    // ** Props
    return (
        <Card >
            <CardBody className="rounded shado-sm">
                <div className="">
                    <div>

                    </div>
                    <Avatar
                        className="avatar-stats p-50 m-0"
                        color={`light-${"primary"}`}
                    />

                </div>
                <div className="d-flex justify-content-between align-items-center mt-1">
                    <div>
                        <h5 className="fw-bolder mb-0 text-black">{title}</h5>
                    </div>
                    <div>
                        <span className="text-primary fw-bolder">
                            {count}
                        </span>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

export default StatsCard
