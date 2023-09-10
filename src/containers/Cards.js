import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards =(props)=>{

   const className=props.type==="Product"?"col-md-3":"col-md-12"
   const buttonName=props.type==="Product"?"Add to Cart":"Remove Item"
   const buttonType=props.type==="Product"?"primary":"danger"
//    const functionName=props.type==="Product"?"addToCart":"removeFromCart"
    return(
        props.data.map(product=>
            
            <div key={product.id} className={className} style={{marginBottom:10}}>
                <Card  className='h-100'>
                    <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px',marginTop:'12px'}} />
                    </div>
                    <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                        {/* {product.description} */}
                        </Card.Text><Card.Text>
                        {`Rs ${product.price}`}
                        </Card.Text>
                        
                    </Card.Body>
                    <Card.Footer>
                    <Button variant={buttonType} onClick={()=>props.addTocart(product)}>{buttonName}</Button>
                    </Card.Footer>
                </Card>
            </div>
        )
        
    )
}
export default Cards