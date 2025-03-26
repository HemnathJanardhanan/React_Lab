import {
    Card,
    CardContent,
  } from "@/components/ui/card"

function FlashCard(props){

    return(
        <Card className='w-full sm:w-80 md:w-96 shadow-lg bg-white flex felx-col items-center justify-center rounded-xl hover:shadow-2xl transition-shadow duration-300'>
            <CardContent className="h-full line-clamp-8 flex flex-col justify-around items-center space-y-9">
                <h3>Q) {props.question}</h3>
                <p>A : {props.answer}</p>
                
            </CardContent>
        </Card>
    )

}

export default FlashCard