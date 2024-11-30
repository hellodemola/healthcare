import providers from '../../helpers/mockData.json';

export async function GET() {
  return Response.json(providers);
}
