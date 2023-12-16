import json
import os

def sample_function(request):
    version = os.environ.get('K_REVISION')
    print(f"Python Function version: {version}")

    request_json = request.get_json()
    print(f'Request for debugging purposes {request_json}')
    
    tag = request_json['fulfillmentInfo']['tag']
    print(f'Tag {tag}')


    # Remember that this payload is vendor specific.
    #phone_number = request_json['payload']['telephony']['caller_id']
    reponse = "from cloud function"

    response_json = json.dumps({
        'sessionInfo': {
            'parameters': {
                'responseFromWebhook': reponse,
            }
        }
    })
    return response_json